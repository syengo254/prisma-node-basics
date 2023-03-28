import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient({log: ['query']});

async function main() {
	const users = await prisma.user.findMany({
		where: {
			name: {equals: 'Kyles'},
		},
		select: {
			id: true,
			role: true,
			userPreference: {
				select: {emailUpdates: true},
			},
		},
	});

	console.log(users);
}

main()
	.catch(e => {
		console.log(e);
	})
	.finally(async () => prisma.$disconnect());
