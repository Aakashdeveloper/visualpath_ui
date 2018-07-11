var express = require('express');
var carRouter = express.Router();

var Cars = [
        {
            "id": 1,
            "brand": "Ford",
            "model": "Mustang",
            "year": 1985,
            "image": "https://image.ibb.co/fm778n/accord.jpg",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        },
        {
            "id": 2,
            "brand": "Nissan",
            "model": "Altima",
            "year": 2017,
            "image": "https://image.ibb.co/fm778n/accord.jpg",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        },
        {
            "id": 3,
            "brand": "Nissan",
            "model": "Armada",
            "year": 2017,
            "image": "https://image.ibb.co/fm778n/accord.jpg",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        },
        {
            "id": 4,
            "brand": "Nissan",
            "model": "Frontier",
            "year": 2017,
            "image": "https://image.ibb.co/fm778n/accord.jpg",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        },
        {
            "id": 5,
            "brand": "Nissan",
            "model": "Maxima",
            "year": 2017,
            "image": "https://image.ibb.co/fm778n/accord.jpg",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        }
]

var router = function(nav){
    carRouter.route('/')
        .get(function(req,res){
        res.render('carList',
            {   title:"Car List",
                result:Cars, 
                nav:nav
            })
    })
    carRouter.route('/:id')
        .get(function(req,res){
        const {id} = req.params;
        res.render('carDetails',
            {   title:"Car Details",
                result:Cars[id], 
                nav:nav
            })
    })
    return carRouter;
}

module.exports = router;