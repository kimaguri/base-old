import { Skeleton } from '@chakra-ui/react'

export const Shimmer = ({ count = 5 }) => {
    return Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} height="20px" my="10px" />
    ))
}
