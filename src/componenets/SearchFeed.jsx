import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from './utils/fetchFromApi'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const {searchTerm}=useParams();
  const [video, setVideo] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setVideo(data.items) })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} color='white'>
        search result for: <span style={{ color: '#F31503' }}>{searchTerm}</span>videos
      </Typography>

      <Videos video={video} />
    </Box>
  )
}

export default SearchFeed