import React, {useEffect, useState} from 'react'
import QueenModal from "../components/QueenModal.jsx";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Queens = () => {
    const [queens, setQueens] = useState([]);

    // Retrieve queens list on mount
    useEffect(() => {
        fetch('/api/queens', {
            method: 'GET'
        })
        .then(res => res.json()
            .then(queensList => setQueens(queensList))
        )
        .catch(err => console.log(err));
    }, [])

    return (
        <Container>
            <h2>Queens</h2>
            <Stack>
                {queens.map((queen) => {
                    return (
                        <QueenModal queen={queen} key={queen.id}/>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default Queens