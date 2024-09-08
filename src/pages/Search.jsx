import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/videos/VideoSearch';

const Search = () => {
    const {searchId} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        console.log(process.env.REACT_APP_YOUTUBE_API_KEY); // API KEY 출력

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=AIzaSyBRc4yYwhpN-d8xgfMerKH6wt94blibNQM`,)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            setVideos(result.items)
        })
        .catch(error => console.log(error));
    }, [searchId]);

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다."
        >
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search