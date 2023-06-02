const mongoose = require('mongoose');

class DataAccessLayer {
  constructor() {
    // Initialize the MongoDB connection
    this.connection = null;
  }

  async connect() {
    // Connect to MongoDB
    this.connection = await mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
  }

  async create(table, data) {
    // Create a new record in the specified table
    const Model = mongoose.model(table);
    const record = new Model(data);
    await record.save();
    return record;
  }

  async read(table, query = {}) {
    // Read all records from the specified table
    const Model = mongoose.model(table);
    const records = await Model.find(query);
    return records;
  }

  async update(table, id, data) {
    // Update a record in the specified table
    const Model = mongoose.model(table);
    const record = await Model.findByIdAndUpdate(id, data, { new: true });
    return record;
  }

  async delete(table, id) {
    // Delete a record from the specified table
    const Model = mongoose.model(table);
    const record = await Model.findByIdAndDelete(id);
    return record;
  }

  async getColumns(table) {
    // Get the columns of the specified table
    const Model = mongoose.model(table);
    const columns = Object.keys(Model.schema.paths);
    return columns;
  }

  async getRows(table) {
    // Get the rows of the specified table
    const Model = mongoose.model(table);
    const rows = await Model.find({});
    return rows;
  }

  async search(table, query) {
    // Search for records in the specified table
    const Model = mongoose.model(table);
    const results = await Model.find(query);
    return results;
  }

  async count(table) {
    // Count the number of records in the specified table
    const Model = mongoose.model(table);
    const count = await Model.countDocuments();
    return count;
  }

  async drop(table) {
    // Drop the specified table
    const Model = mongoose.model(table);
    await Model.deleteMany({});
  }

  async aggregate(table, pipeline) {
    // Perform an aggregation on the specified table
    const Model = mongoose.model(table);
    const results = await Model.aggregate(pipeline);
    return results;
  }

  async distinct(table, field, query) {
    // Get the distinct values of a field in the specified table
    const Model = mongoose.model(table);
    const values = await Model.distinct(field, query);
    return values;
  }

  async findOne(table, query) {
    // Find a single record in the specified table
    const Model = mongoose.model(table);
    const record = await Model.findOne(query);
    return record;
  }

  async findById(table, id) {
    // Find a record by ID in the specified table
    const Model = mongoose.model(table);
    const record = await Model.findById(id);
    return record;
  }
}

module.exports = DataAccessLayer;