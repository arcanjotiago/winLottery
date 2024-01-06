import { GenerateNumber } from './generateNumber';
import express from 'express';
import { Request, Response } from 'express';
import { ResponseWin } from './ResponseWin';
const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


app.post('/generatenumbers', (req: Request, res: Response) => {
    const quantity = req.body.quantity;
    let listNumbers;
    let responseWinLottery;

    if (quantity > 60 || quantity < 1){
      responseWinLottery = new ResponseWin(`The quantity entered is invalid. Please enter a number greater than or equal to 1 and less than or equal to 60`, 400);
      return res.json(responseWinLottery)
    }
    
    listNumbers = new GenerateNumber(quantity);
    responseWinLottery = new ResponseWin(`You winLottery numbers is:  ${listNumbers.genListNumbers()}`, 200);
    res.json(responseWinLottery)
      })