const Contato = require('../models/contatoModel')


exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    })
}

exports.register = async(req, res) => {
    try{
        const contato = new Contato(req.body)
        await contato.register();
    
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors)
            req.session.save(() => res.redirect('/contato/index'))
            return
        }
    
         req.flash('success', 'seu contato foi criado com sucesso')
         req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
         return

    }catch(e){
        console.log(e)
        res.render('404')
    }

}

exports.editIndex = async(req,res) => {
    if(!req.params.id) return res.render('404')

    const conatato = await Contato.buscarPorId(req.params.id)
    if(!conatato) return res.render('404');{
        res.render('contato', {contato});

    }

};