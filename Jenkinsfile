pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'AlmostAdmin']]) {
          // sh 'cd single-spa-demo'
          // sh 'cd react'
          // sh 'npm run build'
          // sh 'cd ..'
          // sh 'cd root'
          // sh 'npm run build'
          // sh 'cd ..'
          sh 'aws s3 sync single-spa-deploy/react/ s3://abhay-soni-spa-2/@root/react/'
          sh 'aws s3 sync single-spa-deploy/root/ s3://abhay-soni-spa-2/@root/root-config/'
          // sh 'aws s3 sync importmap.json s3://abhay-soni-spa-2/'
        }
      }
    }
  }
}
