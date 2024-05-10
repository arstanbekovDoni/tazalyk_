import { Box, Skeleton, Stack } from "@mui/material";

const NewsSkeleton = () => {
  return (
    <Stack>
      <Skeleton variant="rectangular" height={140} width={350} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      <Skeleton variant="rectangular" height={140} width={350} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      <Skeleton variant="rectangular" height={140} width={350} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
      <Skeleton mt={3} variant="rectangular" height={140} width={375} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Stack>
  );
};

export default NewsSkeleton;
