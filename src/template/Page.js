import Box from '@mui/material/Box';

const Page = ({ title, Component}) => {
    return(
        <>
            <div>
                <Box sx={{ typography: 'h3' }}>{title}</Box>
            </div>
            <Component />
        </>
    )
}


export default Page