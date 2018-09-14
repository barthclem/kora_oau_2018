require('../bootstrap');
const Joi = require('joi');

describe(`Student Service Test`, () => {


  const studentSchema = require('../modelSchema/studentSchema');
  const userSchema = require('../modelSchema/userSchema');
  const metaSchema = require('../modelSchema/metaSchema');

  const studentsSchema = Joi.object().keys({
    data: Joi.array().required().items(studentSchema),
    meta: Joi.object().keys(metaSchema)
  }).required();

  const student = {
    name : 'Student',
    login_id: 'stuDent1',
    institution_id: 1,
    password: 'tenduts'
  };

  let studentId = 0;

  before(done => {
    InstitutionService.getAll()
    .then(institutions => {
      student.institution_id = institutions.data[0].id;
      done();
    }).catch(done);
  });

  it('should create new student ', (done) => {
    StudentService.addStudent(student)
        .then(newStudent => {
          studentId = newStudent.id;
          Joi.assert(newStudent, userSchema);
          done();
        }).catch(done);
  });

  it('should fetch a student ', (done) => {
    StudentService.getOne({id: studentId})
        .then(fStudent => {
          studentId = newStudent.id;
          Joi.assert(fStudent, studentSchema);
          done();
        }).catch(done);
  });

  it('should fetch all students ', (done) => {
    StudentService.getAll()
        .then(students => {
          Joi.assert(students, studentsSchema);
          done();
        }).catch(done);
  });

  it('should update a student ', (done) => {
    const studentUpdate = {
      level: '100',
    };

    const updateSchema = {...studentSchema};
    updateSchema.name = studentUpdate.name;
    StudentService.update({id: studentId}, studentUpdate)
        .then(updatedStudent => {
          Joi.assert(updatedStudent, updateSchema);
          done();
        }).catch(done);
  });

  it('should delete a student ', (done) => {
    StudentService.delete({id: studentId})
        .then(student => {
          Joi.assert(student, null);
          done();
        }).catch(done);
  });


});
