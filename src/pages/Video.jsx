import React, { useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    // const [ videoDetail, setVideoDetail ] = useState(null);

    // useEffect(() => {
    //     console.log(process.env.REACT_APP_YOUTUBE_API_KEY); // API KEY 출력

    //     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=AIzaSyBRc4yYwhpN-d8xgfMerKH6wt94blibNQM`,)
    //     .then(response => response.json())
    //     .then(result => {
    //         setVideos(result.items)
    //     })
    //     .catch(error => console.log(error));
    // }, [searchId]);

    return (
        <Main 
            title = "유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다.">
            <section id='videoViewPage'>
                <div className="video__view">
                    <div className="video__play">
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`} 
                            width='100%' 
                            height='100%' 
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Video