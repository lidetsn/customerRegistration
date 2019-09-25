const db=require("../model")

module.exports={
    findAll: function(req, res) 
     {
          db.Customer
          .find({})
        //.sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Customer
          .findById({ _id: req.params.id })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Customer
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Customer
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))//returns the original data not the modified
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Customer
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    };

    