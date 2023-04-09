pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AKIAZ5XG7GGYCPJMJNMT', credentialsId: 'AlmostAdmin', secretKeyVariable: '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']]) {
          sh 'aws s3 sync front-end s3://react-abh-sani'
        }
      }
    }
  }
}
