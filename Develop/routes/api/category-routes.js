const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.json(categoryData);
} catch (err) {
    console.error(err);
    res.json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
        include: [
          { model: Product }
        ]
    });
    res.json(locationData);
} catch (err) {
    console.error(err);
    res.json(err);
}
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.json(categoryData);
} catch (err) {
    console.error(err);
    res.json(err);
}
});

router.put('/:id', async (req, res) => {
  try {
    constcategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({ where: { id: req.params.id } });
    res.json(categoryData);
} catch (err) {
    console.error(err);
    res.json(err);
}
});

module.exports = router;
