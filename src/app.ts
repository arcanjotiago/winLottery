import { GenerateNumber } from './generateNumber';
import express from 'express';
import { Request, Response } from 'express';
import { DefaltResponse } from './defaltResponse';
const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


app.post('/generatenumbers', (req: Request, res: Response) => {
  const quantity:any = req.query.quantity;
  let listNumbers;
  let responseWinLottery;

  if (quantity > 60 || quantity < 1){
    responseWinLottery = new DefaltResponse(
      400,
       `The quantity entered is invalid. Please enter a number greater than or equal to 1 and less than or equal to 60`
    );
    return res.status(400).json(responseWinLottery)
  };
  
  listNumbers = new GenerateNumber(quantity);
  responseWinLottery = new DefaltResponse(200, `You winLottery numbers is:  ${listNumbers.genListNumbers()}`);
  res.json(responseWinLottery)
});