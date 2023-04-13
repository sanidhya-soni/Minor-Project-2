pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'AlmostAdmin']]) {
          sh 'aws s3 sync front-end/sign-up s3://signup-sani',
          sh 'aws s3 sync front-end/login s3://login-sani',
        }
      }
    }
  }
}
