# FROM jenkins/jenkins:lts

# USER root

# # Install necessary packages
# RUN apt-get update && \
#     apt-get install -y apt-transport-https \
#                        ca-certificates \
#                        curl \
#                        gnupg2 \
#                        software-properties-common && \
#     curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
#     add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
#     apt-get update && \
#     apt-get install -y docker-ce-cli && \
#     groupadd docker && \
#     usermod -aG docker jenkins

# USER jenkins

# # Expose ports
# EXPOSE 8080
# EXPOSE 50000


# Use the official Jenkins image as the base image
FROM jenkins/jenkins:latest

# Switch to root user to install Docker
USER root

# Install Docker and Docker Compose
RUN apt-get update && \
    apt-get install -y \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg2 \
        software-properties-common && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/debian \
        $(lsb_release -cs) \
        stable" && \
    apt-get update && \
    apt-get install -y \
        docker-ce \
        docker-ce-cli \
        containerd.io && \
    usermod -aG docker jenkins && \
    curl -sSL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-Linux-x86_64 -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose
    
RUN service docker start

# Switch back to Jenkins user
USER jenkins

# Expose the Jenkins web interface port j
EXPOSE 8080

