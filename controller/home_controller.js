class homeController {
    static home = async (req, res) => {
        try {
            res.render('home', { 'title': 'Welcome to home page!' });

        } catch (err) {
            console.log(err);

        }
    }

    static about=async(req,res)=>{
        try{
            res.render('about',{"title":"About me"});
        }catch(err){
            console.log(err);
            
        }
    }

    static skill= async(req,res)=>{
        try{
            res.render('skill_page',{'title':'Skill and achivements!'});
        }
        catch(err){
            console.log(err);
            
        }
    }
};

export default homeController;