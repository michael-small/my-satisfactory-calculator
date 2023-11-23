export type RawMaterial = {
    id: `${string}${number}`;
    name: string;
    type: 'ore' | 'fluid';
    harvester: 'miner' | 'water extractor';
};

export type DerivedMaterial = {
    id: `${string}${number}`;
    name: string;
    recipes: {
        mats: {
            mat1: {
                name: string;
                amountPerMinute: number;
            };
            mat2: {
                name: string;
                amountPerMinute: number;
            };
            mat3: {
                name: string;
                amountPerMinute: number;
            };
            mat4: {
                name: string;
                amountPerMinute: number;
            };
        };
        producer: string;
        producedPerMinute: number;
        learned: 'default' | 'hard drive' | 'MAM' | `tier ${number}`;
    }[];
};
