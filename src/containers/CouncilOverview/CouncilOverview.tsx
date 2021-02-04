import React from 'react';

interface Props {
    council: string[];
}

export default function CouncilOverview({
    council,
}: Props) {
    return (
        <section>
            {council.map((member) => (
                <div key={member}>{member}</div>
            ))}
        </section>
    );
}