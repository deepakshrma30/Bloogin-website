import { useState } from "react";
import AppBar from "../Components/AppBar";
import Editor from "../Components/editor";

import { Box, Button, Container, Flex } from "@radix-ui/themes";

const AddBlog = () => {
  const [data, setData] = useState<any>();
  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <Container size="4" py={"8"}>
        <Flex
          direction="column"
          gap="6"
          align={"center"}
          className="items-center"
        >
          <Box className="w-full max-w-4xl">
            <Editor data={data} setData={setData} />
          </Box>
          <Button
            variant="solid"
            color="gray"
            highContrast
            style={{ cursor: "pointer", padding: "0.5rem 1.5rem" }}
            size={"2"}
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default AddBlog;
