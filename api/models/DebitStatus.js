module.exports = {
  attributes: {
    name: {
      type: 'String',
      isIn: ['cleared', 'default'],
      required: true
    },
    visible: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
