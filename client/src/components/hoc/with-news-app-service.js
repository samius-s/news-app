import React from 'react'
import { NewsAppServiceConsumer } from '../news-app-service-context/news-app-service-context'

const withNewsAppService = () => (Wrapped) => {
    return (props) => {
        return (
            <NewsAppServiceConsumer>
                {
                    (newsAppService) => {
                        return (<Wrapped {...props}
                            newsAppService={newsAppService}
                        />)
                    }
                }
            </NewsAppServiceConsumer>
        )
    }
}

export default withNewsAppService