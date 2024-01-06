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
    const listNumbers = new GenerateNumber(quantity);
    const responseWinLottery = new ResponseWin(`You winLottery numbers is:  ${listNumbers.genListNumbers()}`, 200)

    res.json(responseWinLottery)
  
      })