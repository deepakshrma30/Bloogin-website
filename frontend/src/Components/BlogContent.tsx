import { Avatar, Flex, Heading, Text } from "@radix-ui/themes";

const BlogContent = () => {
  return (
    <section className="px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[800px] space-y-12 lg:mt-8 md:mt-10 mt-12 ">
        <div className="space-y-2">
          <Heading size="8">The first Blog that will change your mind</Heading>
          <Flex gap="3" top="6">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
            <Flex direction="column" justify="center">
              <Text
                color="gray"
                style={{
                  fontWeight: 500,
                }}
              >
                Deepak sharma
              </Text>
              <Text color="gray">2/3/24</Text>
            </Flex>
          </Flex>
          <article className="prose prose-gray dark:prose-invert">
            <p>
              "Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of
              money.", "Jokester began sneaking into the castle in the middle of
              the night and leaving jokes all over the place: under the king's
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn't seem to stop Jokester.", "Once upon a
              time, in a far-off land, there was a very lazy king who spent all
              day lounging on his throne. One day, his advisors came to him with
              a problem: the kingdom was running out of money.", "Jokester began
              sneaking into the castle in the middle of the night and leaving
              jokes all over the place: under the king's pillow, in his soup,
              even in the royal toilet. The king was furious, but he couldn't
              seem to stop Jokester.", "Once upon a time, in a far-off land,
              there was a very lazy king who spent all day lounging on his
              throne. One day, his advisors came to him with a problem: the
              kingdom was running out of money.", "Jokester began sneaking into
              the castle in the middle of the night and leaving jokes all over
              the place: under the king's pillow, in his soup, even in the royal
              toilet. The king was furious, but he couldn't seem to stop
              Jokester.", "Once upon a time, in a far-off land, there was a very
              lazy king who spent all day lounging on his throne. One day, his
              advisors came to him with a problem: the kingdom was running out
              of money.", "Jokester began sneaking into the castle in the middle
              of the night and leaving jokes all over the place: under the
              king's pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn't seem to stop Jokester.",
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
