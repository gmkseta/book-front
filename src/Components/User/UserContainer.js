import React from "react";
import RatePresenter from "./RatePresenter";

export default () => {
  const { data, loading } = useQuery(ME);
  const [modalOpen, setModalOpen] = useState(false);

  if (loading) return <Loader background="#f1f1f1" />;
  else
    return (
      <ProfilePresenter
        data={data}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    );
};
