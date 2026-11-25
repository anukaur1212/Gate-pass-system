export const Home =(req,res)=>
{
    if(!req.session.userid)
    {
        return res.redirect('/login')
    }
    res.setHeader('content-Type','Text/HTML')

    res.write(`<h1>Welcome back ${req.session.userid}</h1>
        <a href="/logout">Logout</a>`)

        
        console.log(req.session);
        console.log(req.session.userid);

    res.end();
}