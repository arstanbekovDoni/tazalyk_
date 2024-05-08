import { Skeleton, Stack } from "@mui/material";

const NewsSkeleton = () => {
  return (
    <Stack>
      <Skeleton variant="rounded" height={140} width={375} />
    </Stack>
  );
};

export default NewsSkeleton;
