type Props = {
  user: any;
}

const CompanyCard = ({
  user
}: Props) => {

  return (
    <div className="card p-3 mb-3">
      <span>ID Hopy</span>
      <h5>#{ user?.hopy_id }</h5>

      <span>Cliente</span>
      <h5>{ user?.name }</h5>
      <span>Email</span>
      <h5>{ user?.email }</h5>

      <hr />
      
      {
        user?.company?.length > 0 && user.company.map((company: any, index: number) => {
          return  (
            <div key={index}>
              <span>ID Hopy</span>
              <h5>#{ company?.hopy_id }</h5>
              
              <span>Empresa</span>
              <h5>{ company.legal_name }</h5>
        
              <span>CNPJ</span>
              <h5>{ company.document_number }</h5>
            </div>
          )
        })
      }
    </div>
  )
}

export default CompanyCard;
