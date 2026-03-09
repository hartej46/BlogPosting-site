import React, { useState, useEffect } from 'react'
import { Container, PostCard, GoogleAd } from '../components'
import appwriteService from '../Appwrite/config'

function AllPosts() {
    const [Posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts([...posts.rows].reverse() || [])
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post, index) => (
                        <React.Fragment key={post.$id}>
                            <div className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                            {index === 1 && (
                                <div className='p-2 w-1/2'>
                                    <GoogleAd />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts