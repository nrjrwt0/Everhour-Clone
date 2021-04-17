import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import styled from "styled-components"

const Client = styled.table`
    width:85%;
    margin:0 auto;
    padding:20px 40px;
    border:1px solid lightgray;
    th{
        font-size:22px;
        font-weight:600;
    }
    th, td {
    padding: 15px;
    text-align: left;
    border:1px solid lightgray;
}

`

const Bottom = () => {
    const {isLoading,isError,client} = useSelector(state => state.client,shallowEqual)
    return isLoading?<div>...loading</div>:
            isError?<div>something went wrong</div>:
            <div>
                {
                    client?.map(({name,createdAt,status,favorite,paymentDueDays}) => {
                        return (
                            <Client>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Created AT</th>
                                        <th>Favourite</th>
                                        <th>payment Due Days</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td>{status}</td>
                                        <td>{createdAt}</td>
                                        <td>{favorite ? "yes" : "no"}</td>
                                        <td>{paymentDueDays}</td>
                                    </tr>
                                </tbody>
                            </Client>
                        )
                    })
                }
            </div>
}

export default Bottom
