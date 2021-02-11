import React from "react";
import { useState } from "react";
import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Container } from "@chakra-ui/react"

function TransactionsTable() {
    const [trans, setTrans] = useState([])

    return (
        <Container>
            <Table variant="simple">
            <TableCaption>Recent Transactions</TableCaption>
            <Thead>
                <Tr>
                <Th>Action</Th>
                <Th>From/To</Th>
                <Th isNumeric>multiply by</Th>
                </Tr>
            </Thead>
            <Tbody>
                {trans.map((transaction) => (
                    <Tr>
                    <Td>{transaction.action}</Td>
                    <Td>{transaction.recipient}</Td>
                    <Td isNumeric>{transaction.amount}</Td>
                    </Tr>
                ))}
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>Action</Th>
                <Th>From/To</Th>
                <Th isNumeric>multiply by</Th>
                </Tr>
            </Tfoot>
            </Table>
        </Container>
    )
}

export default TransactionsTable;