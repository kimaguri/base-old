import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
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
import { IndeterminateCheckbox } from './indeterminate-checkbox/index.jsx'

export const TableApplet = ({ columns, data, variant = 'simple', onAddRecord }) => {
    const [rowSelection, setRowSelection] = useState({})
    const lovs = useSelector((state) => state.app.lovs)

    const columnsArray = useMemo(
        () => [
            {
                id: 'select',
                header: ({ table }) => (
                    <IndeterminateCheckbox
                        {...{
                            isChecked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler()
                        }}
                    />
                ),
                cell: ({ row }) => (
                    <IndeterminateCheckbox
                        {...{
                            isChecked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler()
                        }}
                    />
                )
            },
            ...createColumns(columns, lovs)
        ],
        [columns, lovs]
    )

    const tableInstance = useReactTable({
        columns: columnsArray,
        data,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        enableMultiRowSelection: true,
        state: {
            rowSelection
        },
        onRowSelectionChange: setRowSelection
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
                    <IconButtonStyled
                        aria-label={'Add record'}
                        icon={<FaPlus />}
                        isRound
                        onClick={onAddRecord}
                    />
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
