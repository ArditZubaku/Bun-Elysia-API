import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function seed() {
  const postData = [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post",
    },
    {
      id: 3,
      title: "Third Post",
      content: "This is the third post",
    },
    {
      id: 4,
      title: "Fourth Post",
      content: "This is the fourth post",
    },
    {
      id: 5,
      title: "Fifth Post",
      content: "This is the fifth post",
    },
  ];

  for (const post of postData) {
    await client.post.upsert({
      where: { id: post.id },
      update: post,
      create: post,
    });
  }

  console.log("Seeded successfully");
}

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await client.$disconnect();
    process.exit(0);
  });
