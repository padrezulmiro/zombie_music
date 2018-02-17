const getVectorXY = (intensity, angle) => {
    const x = intensity * Math.cos(angle);
    const y = intensity * Math.sin(angle);

    return [x,y];
};