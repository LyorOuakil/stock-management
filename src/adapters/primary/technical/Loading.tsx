

interface LoadingProps {
    loading: boolean
    children: React.ReactNode
}

export const Loading = ({loading, children}: LoadingProps) => {
    return (
        <div>
            {loading ? (
                <span>Loading...</span>
            ) :  
            <div>
                {children}
            </div>
            }
        </div>
    )
}