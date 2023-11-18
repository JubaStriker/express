import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

const useRouter = express.Router();

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname)
    next();
}

app.use('/api/v1', useRouter);

useRouter.get('/user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: 'User successfully created',
        data: user
    })
})

app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(something)
    } catch (err) {
        next(err);
    }

})

app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Not Found"
    });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json(
            {
                success: false,
                message: 'Something went wrong'
            }
        )
    }
})




export default app;