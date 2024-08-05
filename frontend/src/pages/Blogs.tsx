import BlogCard from "../Components/BlogCard";
import { Container, Grid } from "@radix-ui/themes";
import AppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import { useEffect, useState } from "react";
import getBlogs from "../services/blogs";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["objects"],
    queryFn: getBlogs,
  });
  const { token } = useStore(
    useShallow((state) => ({
      token: state.token,
    }))
  );

  console.log("data", data);
  if (isLoading) {
    return <div>loading.....</div>;
  }
  if (error) {
    return <div>error.........</div>;
  }
  return (
    <>
      <AppBar />
      <div className="flex min-h-screen   flex-col items-center  justify-center mt-24 ">
        <Container size="4">
          <Grid columns="1" align="center" gap="6">
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjkllkdklfklsdkkfdklnlkfkjdsdklfklsdkfksdkfksdsdskfkjdskfksdkdgklfdsfklsdflksd"
              publishData="2-3-2024"
            />

            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
            <BlogCard
              authorName="Deepak"
              content="kfjsdfjkfkjsdfhksfhksdfksdkfsdfklsdfjklsfklsdflksd"
              publishData="2-3-2024"
            />
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
