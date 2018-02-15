const LEVEL = {
    bpm: 120,
    timeSignature: 4,
    sections: [
        {
            lane: "west",
            compasses: 16,
            zombies: [
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                },
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                },
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                },
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                }
            ]
        },
        {
            lane: "east",
            compasses: 16,
            zombies: [
                {
                    type: "Hollow",
                    velocity: 1,
                    laneTimeout: 2,
                },
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                },
                {
                    type: "Imp",
                    velocity: 1,
                    laneTimeout: 1,
                }
            ]
        }
    ]
};

export default {LEVEL};