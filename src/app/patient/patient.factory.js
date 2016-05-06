(function () {
  'use strict';

  angular.module('latido.patient')
    .factory('patientService', patientService);

  /**
   * API calls of patients
   * @ngInject
   * @param $log
   * @param $q
   * @returns {{getPatients: getPatients, getPatient: getPatient, save: save}}
   */
  function patientService($log, $q) {
    var service = {
      getPatients: getPatients,
      getPatient: getPatient,
      save: save
    };

    var deferred = $q.defer();

    var patients = [
      {
        "id": "b325c779-b88c-41af-afde-c89b80846c4f",
        "title": "Dr.",
        "firstname": "Rudolf",
        "lastname": "Siegfried"
      },
      {
        "id": "bbca289d-dc41-4d24-8ddb-6fc2d091e69a",
        "title": "",
        "firstname": "Max",
        "lastname": "Mustermann"
      },
      {
        "id": "f721661e-dff3-4791-bd6a-031685ace0b3",
        "title": "",
        "firstname": "Utz",
        "lastname": "Manfried"
      }
    ];

    return service;

    /**
     * Get all patients
     * @returns {Function}
     */
    function getPatients() {
      deferred.resolve(patients);
      return deferred.promise;
    }

    /**
     * Get specific patient
     * @param patientId of the patient to query
     * @returns {Function}
       */
    function getPatient(patientId) {
      deferred.resolve(patients.filter(function (patient) {
        return patient.id === patientId;
      }));
      return deferred.promise;
    }

    function save() {
      //
      $log.info('Patient saved');
    }
  }
})();
