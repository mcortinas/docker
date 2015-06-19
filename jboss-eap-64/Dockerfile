FROM mcortinas/docker:centos7-jdk-8u45-latest
MAINTAINER Marc Cortinas <marc.cortinas@gmail.com> (@mcortinas)

#RUN wget https://mega.co.nz/#!UwgwzLja!dHu_a0L16zaoO7DPSZ_NnPJKh7pdwcy-pNuNxwfOTaM -O /opt/jboss-eap-6.4.zip
RUN wget http://pepitolospalotes.cortinasval.cat/jboss-eap-6.4.0.zip -O /opt/jboss-eap-6.4.zip
RUN yum -y install unzip
RUN cd /opt
RUN unzip -o /opt/jboss-eap-6.4.zip
RUN rm -f /opt/jboss-eap-6.4.zip

ENV EAP_HOME=/opt/jboss-eap-6.4

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 9990 9999 9443 8080 4447

CMD ["/opt/jboss-eap-6.4/bin/standalone.sh"]

LABEL vendor=Marc\ Cortinas\
      cat.cortinasval.docker.operatingsystem="CentOS" \
      cat.cortinasval.docker.operatingsystemmajrelease="7" \
      cat.cortinasval.docker.app="jboss-eap" \
      cat.cortinasval.docker.apprelease="6.4" \
      cat.cortinasval.docker.version="0.0.1-test" \
      cat.cortinasval.docker.release-date="2015-06-16"\
      description="CentOS 7 official image with oracle jdk 8u45-b14\
      adding jboss-eap-6.4"
