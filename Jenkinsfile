pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'AlmostAdmin']]) {
          sh 'aws s3 sync front-end s3://react-abh-sani'
        }
      }
    }
  }
}
