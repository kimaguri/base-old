import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'

import { createColumns, prepareAddData, prepareEditData } from './utils.jsx'
import { FiSearch } from 'react-icons/fi'
import { FaPen, FaPlus, FaTrashCan } from 'react-icons/fa6'
import { IconButtonStyled } from './style.js'
import { IndeterminateCheckbox } from './indeterminate-checkbox/index.jsx'
import { deleteRecord, fetchPaginatedData, insertRecord, modifyRecord } from '../../app/supabase.js'
import { AddRecordModal } from './add-record-modal/index.jsx'
import { EditRecordModal } from './edit-record-modal/index.jsx'
import Plate from '../plate/index.jsx'
import { useAuth } from '../supabase-auth-provider/index.jsx'
import { DrilldownModal } from './drilldown-modal/index.jsx'
import { Shimmer } from '../shimmer/index.jsx'

export const TableApplet = ({ meta, variant = 'simple' }) => {
    const { user } = useAuth()

    const [isLoading, setIsLoading] = useState(true)
    const [rowSelection, setRowSelection] = useState({})
    const [pageIndex, setPageIndex] = useState(0) // Current page index
    const [pageSize, setPageSize] = useState(10) // Number of records per page
    const [pageCount, setPageCount] = useState(0) // Total number of pages

    const [data, setData] = useState([])
    const [isAddRecordModalOpen, setIsAddRecordModalOpen] = useState(false)
    const [isEditRecordModalOpen, setIsEditRecordModalOpen] = useState(false)
    const [isDrilldownModalOpen, setIsDrilldownModalOpen] = useState(false)
    const lovs = useSelector((state) => state.app.lovs)
    const selectedRecordsIds = Object.keys(rowSelection)
    const firstSelectedRecordId = selectedRecordsIds[0]

    const firstSelectedRecordData =
        data && data?.filter((record) => record.id === firstSelectedRecordId)
    const { tableName, foreignTables, columns, addRecord, editRecord } = meta || {}
    const isAddRecordAvailable = meta.addRecord
    const isDeleteRecordAvailable = firstSelectedRecordId && meta.deleteRecord?.disabled !== true
    const isEditRecordAvailable = firstSelectedRecordId && meta.editRecord
    const isDrilldownAvailable = firstSelectedRecordId && meta.drilldown

    useEffect(() => {
        handleFetch()
    }, [pageIndex, pageSize])

    const getTableRowId = (row) => row.id

    const handleFetch = () => {
        setIsLoading(true)
        fetchPaginatedData({
            tableName,
            foreignTables,
            pageIndex,
            pageSize
        })
            .then(({ data, count }) => {
                setData(data)
                setPageCount(Math.ceil(count / pageSize))
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleAdd = () => {
        setIsAddRecordModalOpen(true)
    }

    const handleEdit = () => {
        setIsEditRecordModalOpen(true)
    }

    const handleSubmitAdd = (newRecordData) => {
        insertRecord({
            tableName,
            recordData: prepareAddData(newRecordData, addRecord?.fields, { user })
        }).then(handleFetch)
    }

    const handleSubmitEdit = (editRecordData) => {
        modifyRecord({
            tableName,
            recordId: firstSelectedRecordId,
            recordData: prepareEditData(editRecordData, editRecord?.fields)
        }).then(() => {
            handleFetch()
            setRowSelection({})
        })
    }

    const handleDelete = () => {
        const arrayDeleteRecords = selectedRecordsIds.map((recordId) =>
            deleteRecord({ tableName, recordId })
        )
        Promise.all(arrayDeleteRecords).then(() => {
            handleFetch()
            setRowSelection({})
        })
    }

    const openDrilldown = () => {
        setIsDrilldownModalOpen(true)
    }

    const closeDrilldown = () => {
        setIsDrilldownModalOpen(false)
        setRowSelection({})
    }

    const columnsArray = useMemo(
        () => [
            {
                id: 'select',
                header: ({ table }) => (
                    <IndeterminateCheckbox
                        {...{
                            isChecked: table.getIsAllRowsSelected(),
                            isIndeterminate:
                                table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler()
                        }}
                    />
                ),
                cell: ({ row }) => (
                    <IndeterminateCheckbox
                        {...{
                            isChecked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            isIndeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler()
                        }}
                    />
                )
            },
            ...createColumns(columns, lovs, {
                // TODO TEMP handlers возможно стоит вынести в action/store
                openDrilldown,
                setRowSelection
            })
        ],
        [columns, lovs]
    )

    const tableInstance = useReactTable({
        getRowId: getTableRowId,
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

    if (isLoading) {
        return <Shimmer />
    }

    return (
        <Plate>
            <TableContainer maxH={1150} overflowX="auto" overflowY="auto">
                <Flex flexDir="column" gap={5}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                    >
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
                        <InputGroup justifyContent="end" gap="15px">
                            {isAddRecordAvailable && (
                                <IconButtonStyled
                                    aria-label={'Add record'}
                                    icon={<FaPlus />}
                                    isRound
                                    onClick={handleAdd}
                                />
                            )}
                            {isEditRecordAvailable && (
                                <IconButtonStyled
                                    aria-label={'Edit record'}
                                    icon={<FaPen />}
                                    isRound
                                    onClick={handleEdit}
                                />
                            )}
                            {isDeleteRecordAvailable && (
                                <IconButtonStyled
                                    aria-label={'Delete record'}
                                    icon={<FaTrashCan />}
                                    isRound
                                    onClick={handleDelete}
                                />
                            )}
                        </InputGroup>
                    </Box>
                    <Table variant={variant}>
                        <Thead>
                            {tableInstance.getHeaderGroups().map((headerGroup) => {
                                return (
                                    <Tr key={headerGroup.id}>
                                        {headerGroup?.headers.map((header) => (
                                            <Th
                                                key={header.id}
                                                isNumeric={
                                                    header.column.columnDef.type === 'numeric'
                                                }
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
            <Flex justifyContent="space-between" p={4}>
                <Button onClick={() => setPageIndex(0)} disabled={pageIndex === 0}>
                    First
                </Button>
                <Button
                    onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
                    disabled={pageIndex === 0}
                >
                    Previous
                </Button>
                <Button
                    onClick={() => setPageIndex((old) => Math.min(old + 1, pageCount - 1))}
                    disabled={pageIndex === pageCount - 1}
                >
                    Next
                </Button>
                <Button
                    onClick={() => setPageIndex(pageCount - 1)}
                    disabled={pageIndex === pageCount - 1}
                >
                    Last
                </Button>
                <Select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                    {[5, 10, 20, 30, 50].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </Select>
            </Flex>

            {isAddRecordAvailable && (
                <AddRecordModal
                    meta={meta.addRecord}
                    isOpen={isAddRecordModalOpen}
                    onClose={() => setIsAddRecordModalOpen(false)}
                    onSubmit={handleSubmitAdd}
                />
            )}
            {isEditRecordAvailable && (
                <EditRecordModal
                    recordData={firstSelectedRecordData}
                    meta={meta.editRecord}
                    isOpen={isEditRecordModalOpen}
                    onClose={() => setIsEditRecordModalOpen(false)}
                    onSubmit={handleSubmitEdit}
                />
            )}
            {isDrilldownAvailable && (
                <DrilldownModal
                    recordData={firstSelectedRecordData}
                    drilldownMeta={meta.drilldown}
                    isOpen={isDrilldownModalOpen}
                    onClose={closeDrilldown}
                    onSubmit={() => {}}
                />
            )}
        </Plate>
    )
}
