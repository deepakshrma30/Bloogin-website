import { Avatar, Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogProps {
  authorName: string;
  content: string;
  publishData: string;
}

const BlogCard = ({ authorName, content, publishData }: BlogProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    setMousePosition({ x, y });
  };

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) scale(1.05)`,
    transition: 'transform 0.1s ease-out',
    
  };
  const navigate=useNavigate()

  return (
    <div className="bg-white border border-gray-200 max-w-[800px]  box-border shadow max-h-[500px]  p-6 rounded-md transition-all ease-in-out hover:scale-110 hover:cursor-pointer hover:shadow-xl hover:shadow-rose-200" 
    onMouseMove={handleMouseMove}
    onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    style={mousePosition.x || mousePosition.y ? transformStyle : {}} onClick={()=>navigate("/content")}>
      <Flex gap="2" align="center">
        {/* <Avatar/> */}
        <Avatar  fallback={authorName[0]} />
        <Text>{authorName}</Text>
      </Flex>
      <div className="p-4">
        <Text as="p" className="break-word " wrap="wrap">
          {content}skdfjhksdfjksdkjfkdsjkfjkdsjkfdssdfnsdfbsdbfkjsjdfhkjsdkfjsd
        </Text>
      </div>

      <Flex gap="2">
        <Text as="p" size="2">
          {publishData}
        </Text>

        <Badge color="gray" highContrast variant="surface">
          {Math.ceil(content?.length / 100)} min read
        </Badge>
      </Flex>
    </div>
  );
};

export default BlogCard;
