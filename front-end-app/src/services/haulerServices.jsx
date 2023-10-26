export const getAllHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};

export const getHaulersWithDocks = () => {
  return fetch(`http://localhost:8000/haulers?_expand=docks`).then((res) =>
    res.json()
  );
};
