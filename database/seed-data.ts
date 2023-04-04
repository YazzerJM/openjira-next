
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Ex consectetur cillum minim amet ex cupidatat.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En-Progreso: Duis mollit duis id deserunt cillum cillum cillum enim ad reprehenderit tempor quis culpa nulla.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Terminada: Elit est dolore ipsum fugiat fugiat ullamco et ea et commodo ipsum est.',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ]
}