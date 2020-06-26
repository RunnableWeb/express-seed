import exampleSeeds from './example.seed';

export async function initDataSeed() {
    // order matter
    const allSeeds = [...exampleSeeds];

    for (let i = 0; i < allSeeds.length; i++) {
        const seed = allSeeds[i];
        await seed();
    }
}
