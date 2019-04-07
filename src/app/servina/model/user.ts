export class User {
   constructor(
        public usuario: string,
        public password: string,
        public fechaIngreso: Date,
        public publicIp: string
   ) {
   }
}