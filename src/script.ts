import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const users = await prisma.user.deleteMany();
	console.log(users);
}

main()
	.catch(e => {
		console.log(e);
	})
	.finally(async () => prisma.$disconnect());
