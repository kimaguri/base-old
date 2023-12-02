import { useMemo } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'

import { createColumns } from './utils.js'
import { FiSearch } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa6'
import { IconButtonStyled } from './style.js'

export const TableApplet = ({ columns, data, variant = 'striped' }) => {
    const columnsArray = useMemo(() => createColumns(columns), [columns])
    const tableInstance = useReactTable({
        columns: columnsArray,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <TableContainer>
            <Flex flexDir="column" gap={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <InputGroup width="550px">
                        <InputLeftElement
                            pointerEvents="none"
                            height="100%"
                            alignItems="center"
                            ml={2}
                        >
                            <FiSearch color="gray.300" fontSize={24} />
                        </InputLeftElement>
                        <Input type="text" placeholder="Поиск" size="lg" />
                    </InputGroup>
                    <IconButtonStyled aria-label={'Add record'} icon={<FaPlus />} isRound />
                </Box>
                <Table variant={variant}>
                    <Thead>
                        {tableInstance.getHeaderGroups().map((headerGroup) => {
                            return (
                                <Tr key={headerGroup.id}>
                                    {headerGroup?.headers.map((header) => (
                                        <Th
                                            key={header.id}
                                            isNumeric={header.column.columnDef.type === 'numeric'}
                                            color="black"
                                            fontSize={12}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext()
                                                  )}
                                        </Th>
                                    ))}
                                </Tr>
                            )
                        })}
                    </Thead>
                    <Tbody>
                        {tableInstance.getRowModel().rows.map((row) => {
                            return (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <Td
                                            key={cell.id}
                                            isNumeric={cell.column.columnDef.type === 'numeric'}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    ))}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Flex>
        </TableContainer>
    )
}
