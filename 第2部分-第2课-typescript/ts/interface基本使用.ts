interface serverData{
  err?: boolean;
  data: {
    rows: string[]
  };
}

let data:serverData;

data={
  err: false,
  data: {
    rows: ['1', '3', '5']
  },
  b: 12
};
